export const unauthorizedPage = {
  html: `
          <html>
          <head>
              <style>
              body {
                      background-color: #f2f2f2;
                      color: #333;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      height: 100vh;
                      margin: 0;
                      padding: 0;
                      font-family: Arial, sans-serif;
              }
              .container {
                      text-align: center;
              }
              h1 {
                      font-size: 36px;
                      margin-bottom: 16px;
                      color: #555;
              }
              p {
                    font-size: 24px;
                    color: #777;
              }
              </style>
          </head>
          <body>
              <div class="container">
              <h1>Unauthorized 🚫</h1>
                <p>¡Sorry, you are not authorized to access this resource!</p>
              </div>
          </body>
          </html>
      `,
};
