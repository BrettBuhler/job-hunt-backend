const { MongoClient } = require('mongodb');

const URI = process.env.MONGODB_URI;
const client = new MongoClient(URI);

async function updateUser(input) {
  const { email, ...update } = input;
  console.log(update);
  try {
    await client.connect();
    const database = client.db('JobHunt');
    const usersCollection = database.collection('users');

    const updatedUser = await usersCollection.findOneAndUpdate(
      { email },
      { $set: update },
      { new: true }
    );

    if (!updatedUser) {
      //user not found
      return { status: 404, response: { error: 'User not found' } };
    }
    return { status: 200, response: { updateUser: updatedUser } };
  } catch (err) {
    console.log(err);
    return { status: 500, response: { error: 'Server error' } };
  } finally {
    await client.close();
  }
}

module.exports = updateUser;