const LoginButton = (props) => {
  return (
    <button className="LoginButton" onClick={props.handleClickLoginButton}>
      {props.isLogin ? "ログアウト" : "ログイン"}
    </button>
  );
};

export default LoginButton;
