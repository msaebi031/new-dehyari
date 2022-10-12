import { checkLogin } from "../../../server/controllers/login";
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  async function loginRoute(req, res) {
    // get user from database then:
    const { email, password } = req.body;
    const data = await checkLogin({ email, password });
    if (data.result) {
      req.session.user = {
        email,
        contenteshy: true,
      };
      await req.session.save();
    }
    res.send(data);
  },
  {
    cookieName: "login",
    password: process.env.PASSWORD_COOKI,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      // path: "/panelAdmin",
    },
  }
);
