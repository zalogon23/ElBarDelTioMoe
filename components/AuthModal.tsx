import { Modal } from 'native-base'
import React, { ReactElement, useContext, useEffect, useState } from 'react'
import ButtonWithIcon from './ButtonWithIcon'
import Heading from './Heading'
import FormControl from "../components/FormControl"
import { userContext } from '../contexts/UserContext'
import client, { serverUrl } from '../lib/apolloClient'
import queries from '../lib/queries'
import { TokensLoginDto } from '../models/Tokens'
import UserType from '../models/UserType'


interface Props {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  [props: string]: any
}

function AuthModal({ isOpen, setIsOpen, ...props }: Props): ReactElement {
  const { setUser } = useContext(userContext);
  const [authType, setAuthType] = useState("login" as "login" | "register");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  useEffect(() => {
    return () => {
      setTimeout(() => setAuthType("login"), 150);
    }
  }, [isOpen])
  return (
    <Modal
      size="xl"
      isOpen={isOpen}
      {...props}
    >
      <Modal.Content>
        {
          authType === "login" ?
            <>
              <Modal.Header>
                <Heading>Login</Heading>
              </Modal.Header>
              <Modal.CloseButton />
              <Modal.Body>
                <FormControl
                  label="Nombre de usuario"
                  helper=""
                  errorMessage=""
                  value={loginUsername}
                  onChangeText={(text: string) => setLoginUsername(text)}
                />
                <FormControl
                  label="Contraseña"
                  type="password"
                  helper=""
                  errorMessage=""
                  value={loginPassword}
                  onChangeText={(text: string) => setLoginPassword(text)}
                />
              </Modal.Body>
              <Modal.Footer
                flexDir="row"
              >
                <ButtonWithIcon
                  size="small"
                  mr="2"
                  colorScheme="amber"
                  focusColor="amber.400"
                  name="question"
                  color="white"
                  dir="right"
                  onPress={() => setAuthType("register")}
                >
                  Registrarme
                </ButtonWithIcon>
                <ButtonWithIcon
                  size="small"
                  colorScheme="amber"
                  focusColor="amber.300"
                  name="send"
                  color="white"
                  dir="right"
                  onPress={async () => {
                    const tokens = await login(loginUsername, loginPassword);
                    if (tokens?.token) {
                      const user = await getUser(tokens.token);
                      setUser?.(user);
                      setIsOpen(false);
                    }
                  }}
                >
                  Enviar
                </ButtonWithIcon>
              </Modal.Footer>
            </>
            :
            <>
              <Modal.Header
                display="flex"
              >
                <Heading>Registro</Heading>
              </Modal.Header>
              <Modal.CloseButton />
              <Modal.Body>
                <FormControl
                  label="Nombre de usuario"
                  helper="Tu mejor apodo!"
                  value={registerUsername}
                  onChangeText={(text: string) => setRegisterUsername(text)}
                  errorMessage=""
                />
                <FormControl
                  label="Contraseña"
                  helper="Una contraseña difil, con minimo 8 caracteres"
                  errorMessage=""
                  type="password"
                  value={registerPassword}
                  onChangeText={(text: string) => setRegisterPassword(text)}
                />
              </Modal.Body>
              <Modal.Footer>
                <ButtonWithIcon
                  size="small"
                  colorScheme="amber"
                  focusColor="amber.300"
                  name="send"
                  color="white"
                  dir="right"
                  onPress={() => { }}
                >
                  Enviar
                </ButtonWithIcon>
              </Modal.Footer>
            </>
        }
      </Modal.Content>
    </Modal>
  )
  async function login(username: string, password: string): Promise<TokensLoginDto | null> {
    const result = await fetch(serverUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ username: loginUsername, password: loginPassword })
    });
    const tokens = await result.json() as TokensLoginDto | null;
    return tokens;
  };
}

async function getUser(token: string): Promise<UserType | null> {
  const graphResult = await client.query({
    query: queries.getSelf,
    context: {
      headers: {
        "Authorization": `bearer ${token}`
      }
    }
  });
  const user = graphResult.data?.self as UserType | null;
  return user;
}


export default AuthModal
