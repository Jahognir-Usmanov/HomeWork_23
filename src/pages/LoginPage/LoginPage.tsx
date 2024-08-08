import "./LoginPage.scss";
import { Input, Button, Heading, RegistrationInfo} from "../../components/Index";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Heading variant={'h1'} text={'Авторизация'}/>
      <form action="#">
        <Input type={"tel"} placeholder={"Номер телефона"} />
        <Input type={"password"} placeholder={"Пароль"} />
        <Button text={"Войти"} />
      </form>
      <Link to="/">Забыли пароль?</Link>
      <RegistrationInfo linkText={'Зарегестрироваться'}
      hasAccountText={'У вас нет аккаунта?'}
      authWithText={'Войти с помощью'}/>

    </div>
  );
};

