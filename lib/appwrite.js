const appwriteModule = await import('react-native-appwrite')
// import { Client, Databases, Account, ID } from appwriteModule// esm
// const Client = require('react-native-appwrite').Client; // CommonJS
// const Databases = require('react-native-appwrite').Databases;
// const Account = require('react-native-appwrite').Account;
// const ID = require('react-native-appwrite').ID;


const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.jsm.newsflash",
    projectId: "664a554e0030c9b82884",
    databaseId: "664ca7bd002fd95a7abe",
    userCollectionId: "664ca7ff0025966c50c1",
    newsCollectionId: "664ca80600120e542490",
    storageId: "664cb02100264fcdcf12"
}
// Init your React Native SDK
const client = new appwriteModule.Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.

const account = new appwriteModule.Account(client);
const databases = new appwriteModule.Databases(client)

// Get news to be rendered in home -> return array of content

async function getDocuments(count, category){
    const response = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.newsCollectionId,
        [ // query
            Query.equal('category', category),
            Query.orderDesc('date_published')
        ]
    ).then(
        (news) => {response = news},
        (e) => {console.log(e)}
    )
    var docCount = response.total

    var returnDocuments = []
    for(let i = 0; i < docCount && i < count; i++){
        returnDocuments.push(response.documents[i])
    }
    return returnDocuments;
}

async function main(){
   getDocuments(5, 'technology') 
}
main();
