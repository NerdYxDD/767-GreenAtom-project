import * as bcrypt from 'bcrypt';

export const hashPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(5);
  return bcrypt.hashSync(password, salt);
};

export const checkPassword = async (
  passFromReq: string,
  passInDB: string,
): Promise<string> => {
  return await bcrypt.compare(passFromReq, passInDB);
};
