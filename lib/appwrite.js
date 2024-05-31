import { Client, Account, Databases } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.jsm.newsflash",
    projectId: "664a554e0030c9b82884",
    databaseId: "664ca7bd002fd95a7abe",
    userCollectionId: "664ca7ff0025966c50c1",
    newsCollectionId: "664ca80600120e542490",
    storageId: "664cb02100264fcdcf12"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.



export const account = new Account(client);
export const databases = new Databases(client)

// Register User

export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}

