const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DevOps Tutorial</title>
        <style>
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #071a2a 0%, #0d2d4f 40%, #123d68 100%);
            color: #edf6ff;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .container {
            width: min(1100px, 90%);
            background: rgba(10, 25, 40, 0.75);
            border: 1px solid rgba(123, 201, 255, 0.25);
            border-radius: 22px;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
            overflow: hidden;
          }

          .hero {
            display: grid;
            grid-template-columns: 1.3fr 0.9fr;
            min-height: 620px;
          }

          .hero-text {
            padding: 60px 60px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .badge {
            display: inline-block;
            width: fit-content;
            background: rgba(60, 180, 255, 0.12);
            border: 1px solid rgba(104, 205, 255, 0.35);
            color: #8fe3ff;
            padding: 8px 14px;
            border-radius: 999px;
            font-size: 12px;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            margin-bottom: 22px;
          }

          h1 {
            margin: 0;
            font-size: clamp(2.5rem, 5vw, 4.3rem);
            line-height: 1.05;
            letter-spacing: -0.06em;
          }

          .highlight {
            color: #77d3ff;
          }

          .subtext {
            margin-top: 18px;
            font-size: 1.08rem;
            line-height: 1.8;
            color: #d6e9ff;
            max-width: 560px;
          }

          .feature-list {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 26px;
          }

          .feature-list span {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 10px 16px;
            font-size: 0.92rem;
            color: #edf8ff;
          }

          .login-panel {
            background: rgba(6, 17, 28, 0.8);
            border-left: 1px solid rgba(123, 201, 255, 0.18);
            padding: 42px 32px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .login-box {
            width: 100%;
            max-width: 360px;
            background: rgba(11, 29, 45, 0.92);
            border: 1px solid rgba(130, 214, 255, 0.2);
            border-radius: 18px;
            padding: 26px 24px 20px;
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
          }

          .login-box h2 {
            margin: 0 0 8px;
            font-size: 1.9rem;
            text-align: center;
          }

          .login-box p {
            margin: 0 0 24px;
            text-align: center;
            color: #b8d8f4;
            font-size: 0.96rem;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          label {
            display: block;
            color: #dceeff;
            font-size: 0.84rem;
            margin-bottom: 8px;
          }

          input {
            width: 100%;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(130, 214, 255, 0.2);
            border-radius: 10px;
            padding: 14px 14px;
            font-size: 1rem;
            color: white;
            outline: none;
          }

          input:focus {
            border-color: #77d3ff;
            box-shadow: 0 0 0 3px rgba(119, 211, 255, 0.15);
          }

          button {
            margin-top: 8px;
            background: linear-gradient(135deg, #52b6ff 0%, #7de0d3 100%);
            border: none;
            border-radius: 10px;
            color: #061b2b;
            font-size: 1rem;
            font-weight: 700;
            padding: 14px 16px;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          button:hover {
            transform: translateY(-1px);
            box-shadow: 0 10px 25px rgba(82, 182, 255, 0.35);
          }

          .signup {
            text-align: center;
            margin-top: 18px;
            font-size: 0.9rem;
            color: #bfd7f8;
          }

          .signup a {
            color: #8fe3ff;
            text-decoration: none;
            font-weight: 600;
          }

          @media (max-width: 860px) {
            .hero {
              grid-template-columns: 1fr;
            }

            .login-panel {
              border-left: none;
              border-top: 1px solid rgba(123, 201, 255, 0.18);
              padding-top: 24px;
            }

            .hero-text {
              padding: 32px 24px 18px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="hero">
            <div class="hero-text">
              <div class="badge">DevOps Learning Platform</div>
              <h1>Welcome to <span class="highlight">DevOps Tutorial</span></h1>
              <p class="subtext">
                Build real-world skills in CI/CD, Docker, Kubernetes, Jenkins, AWS, and automation.
                Learn how modern teams deliver faster, safer, and smarter software with end-to-end DevOps practices.
              </p>

              <div class="feature-list">
                <span>CI/CD</span>
                <span>Docker</span>
                <span>Jenkins</span>
                <span>AWS</span>
                
                <span>Kubernetes</span>
              </div>
            </div>

            <div class="login-panel">
              <div class="login-box">
                <h2>Login</h2>
                <p>Access your DevOps lab</p>

                <form>
                  <div>
                    <label for="username">Username</label>
                    <input id="username" type="text" placeholder="Enter username" />
                  </div>

                  <div>
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter password" />
                  </div>

                  <button type="submit">Sign In</button>
                </form>

                <div class="signup">
                  New here? <a href="#">Create account</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`DevOps tutorial app running on port ${PORT}`);
});
