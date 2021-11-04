import { BeverageGraphType } from "../models/BeverageType";
import client from "./apolloClient";
import queries from "./queries";

export default class BeveragesHandler {
  static async GetBeverages(): Promise<BeverageGraphType[] | null> {
    const beverages = (await client.query({
      query: queries.getBeverages
    }))?.data?.beverages as BeverageGraphType[] | null;
    return beverages;
  }
}