import React from 'react'
import googleImage from '../../assets/googleImage.png';
import naverImage from '../../assets/naverImage.png';
import kakaoImage from '../../assets/kakaoImage.png';
import styles from './LoginPage.module.css';

export default function LoginPage() {

    const googleLogin = () => {
        window.location.href= "https://criel-db-test.herokuapp.com/user/auth/google"
    }

    const kakaoLogin = () => {
        window.open("https://criel-db-test.herokuapp.com/user/auth/kakao", "_self");
    }
    
    const naverLogin = () => {
        window.location.href = "https://criel-db-test.herokuapp.com/user/auth/naver"
    }


    return (
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <h1>Login</h1>
                <div className={styles.googleContainer} onClick={googleLogin}>
                    <img src={googleImage} alt="Google Icon" />
                    <p>Login With Google</p>
                </div>

                <div className={`${styles.googleContainer} ${styles.githubContainer}`} onClick={kakaoLogin}>
                    <img src={kakaoImage} alt="Github Icon" />
                    <p>Login With Github</p>
                </div>

                <div className={`${styles.googleContainer} ${styles.twitterContainer}`} onClick={naverLogin}>
                    <img src={naverImage} alt="Twitter Icon" />
                    <p>Login With Twitter</p>
                </div>

            </div>

        </div>
    )
}
