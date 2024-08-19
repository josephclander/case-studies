import '../App.css';

type BirthdayProps = {
  fullName: string;
};

export const Birthday = ({ fullName }: BirthdayProps) => {
  return <h1>Happy birthday {fullName}!</h1>;
};
