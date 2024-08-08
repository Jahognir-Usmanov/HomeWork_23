import { Link } from "react-router-dom";
import { Input, Button, Heading } from "../../components/Index";
import './RegistrationPage.scss'

export const RegistrationPage = () => {
    return (
        <div className="LoginPage">
            <Heading variant={'h1'} text={'Регистрация'}/>
            <form action="#">
                <Input type={'name'} placeholder={'Введите имя: '}/>

                <Input type={'phone'} placeholder={'Введите ваш номер телефона: '}/>

                <Input type={'email'} placeholder={'Введите вашу почту: '}/>

                <Input type={'password'} placeholder={'Введие ваш пароль: '}/>

                <Input type={'city'} placeholder={'Введите ваш город: '}/>
                
                <Link to='/main'>
                <Button text={'Зарегестрироваться'}/>
                </Link>

                <Link to='/'>
                <Button text={'Войти'}/>
                </Link>

            </form>

        </div>

    );

};

export default RegistrationPage;