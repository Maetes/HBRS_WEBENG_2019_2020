import jwt from 'jsonwebtoken';

const authCheck = (context: any) => {
  const Authorization = context.request.req.headers.authorization;
  const token = Authorization.replace('Bearer ', '');
  const { email }: any = jwt.verify(
    token,
    process.env.APP_SECRET as string,
    (err: any, decoded: any) => {
      if (err) {
        throw new Error('not authenticated!');
      }
      return decoded;
    }
  );
  if (email) {
    return email;
  }
};

export default authCheck;
