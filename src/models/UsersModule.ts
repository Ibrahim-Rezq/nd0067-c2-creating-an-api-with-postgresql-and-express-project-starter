import Client from '../database';
import bcrypt from 'bcrypt';
const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;

export type User = {
  id: 1;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};

export class UsersStore {
  async index(): Promise<User[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users';

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get Users. Error: ${err}`);
    }
  }

  async show(id: number): Promise<User> {
    try {
      const sql = 'SELECT * FROM users WHERE id=($1)';
      const conn = await Client.connect();
      
      const result = await conn.query(sql, [id]);
      
      conn.release();
      
      // @ts-ignore
      return result.rows;
    } catch (err) {
      throw new Error(`Could not find User ${id}. Error: ${err}`);
    }
  }

  async create(u: User): Promise<User> {
    try {
      const sql =
        'INSERT INTO users (firstName,lastName,username,password) VALUES($1, $2, $3, $4) RETURNING *';
      const conn = await Client.connect();
      const hash = bcrypt.hashSync(
        u.password + BCRYPT_PASSWORD,
        //@ts-ignore
        parseInt(SALT_ROUNDS)
      );

      const result = await conn.query(sql, [
        u.firstName,
        u.lastName,
        u.username,
        hash,
      ]);

      const User = result.rows[0];

      conn.release();
      return User;
    } catch (err) {
      throw new Error(`Could not add new user ${name}. Error: ${err}`);
    }
  }
  async delete(id: string): Promise<User> {
    try {
      const sql = 'DELETE FROM users WHERE id=($1)';
      // @ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [id]);

      const user = result.rows[0];

      conn.release();

      return user;
    } catch (err) {
      throw new Error(`Could not delete user ${id}. Error: ${err}`);
    }
  }
  async authenticate(username: string, password: string): Promise<User | null> {
    const conn = await Client.connect();
    const sql = 'SELECT password FROM users WHERE username=($1)';

    const result = await conn.query(sql, [username]);

    if (result.rows.length) {
      const user = result.rows[0];

      if (bcrypt.compareSync(password + BCRYPT_PASSWORD, user.password)) {
        return user;
      }
    }

    return null;
  }
}
