import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";

const LoginForm = () => {
	return (


		<div class="container">
			<div class="screen">
				<div class="screen__content">

					<span class="login100-form-title p-b-26 text -299" style={{ fontFamily: "fantasy" }}>
						LOGIN
					</span>


					<form class="login">
						<div class="login__field">
							<i class="login__icon fas fa-user"></i>
							<div className="login__input">
								<input type="text" placeholder="User name / Email" required />

							</div>
							{/* <input type="text" class="login__input" placeholder="User name / Email" /> */}
						</div>
						<div class="login__field">
							<i class="login__icon fas fa-lock"></i>
							<div className="login__input">
								<input type="password" placeholder="Password" required />

							</div>
							{/* <input type="password" class="login__input" placeholder="Password" /> */}
						</div>

						<div className="col-md-12 col-12 mb-1">
							<button className="button col-12 -outline-blue-1 text-black-1 py-15 rounded-8 bg-danger login__submit">
								<i className="  text-15 mr-10" />
								Login
							</button>
						</div>


					</form>

				</div>

			</div>
			&nbsp;
			<div style={{ marginLeft: "5%" }}>

				<LoginWithSocial />
			</div>

		</div>
	);
};

export default LoginForm;





