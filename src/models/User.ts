import { Auto, Model, ObjectID, Ref } from "@tsed/mongoose";
import { Description, Email, MinLength, Property, Required } from "@tsed/schema";

@Model({ collection: "User" })
export class User {
  @Property()
  @Auto(true)
  @ObjectID("id")
  _id: string;

  @Required()
  @Property()
  name: string;

  @Required()
  @Property()
  phone: string;

  @Email()
  @Required()
  @Property()
  email: string;

  @MinLength(7)
  @Required()
  @Property()
  password: string;
}