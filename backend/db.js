import mysql from "mysql";

const dbConfigs = {
  rohan: {
    host: "localhost",
    user: "rohan",
    password: "357951",
    database: "byway",
  },
  haseena: {
    host: "localhost",
    user: "root",
    password: "nothing",
    database: "Byway",
  },
  bipasha: {
    host: "localhost",
    user: "root",
    password: "12345",
    database: "Byway",
  },
  anup: {
    host: "localhost",
    user: "anup",
    password: "15akc#",
    database: "byway",
  },
  aabrity: {
    host: "localhost",
    user: "root",
    password: "A@brity0916",
    database: "byway",
  },
};

async function connectToDatabase() {
  for (let user in dbConfigs) {
    const dbConfig = dbConfigs[user];
    const connection = mysql.createConnection(dbConfig);

    try {
      await connection.connect();
      console.log(`Connected to ${user}'s database!`);
      return connection;
    } catch (err) {
      console.log(
        `Failed to connect to ${user}'s database. Trying next user...`
      );
    }
  }

  throw new Error("Failed to connect to any database.");
}

export default connectToDatabase;
