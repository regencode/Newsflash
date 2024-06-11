import { Client, Databases, Account } from "react-native-appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("<YOUR_PROJECT_ID>") // Replace with your project ID
  .setPlatform('com.example.idea-tracker');


export const account = new Account(client);
export const databases = new Databases(client);
