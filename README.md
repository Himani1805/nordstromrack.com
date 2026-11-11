# nordstromrack.com

A Nordstrom Rack style shopping homepage built with React, Vite, and Chakra UI. The page shows sale banners, a product slider, featured products, signup and login, and a full footer.

## About

Browse the homepage, open category menus, and jump to matching sections on the same page. Create an account, sign in, and see your name in the header. Sign out when you are done. Product photos and banners are saved in the project, so they keep working offline.

Accounts are stored in this browser only. There is no real checkout or payment backend.

## What you will see

- A header with search, Sign In, Stores, Purchases, and cart
- Category menus such as Women, Shoes, and Clearance
- Promo banners and a homepage image slider
- Featured Finds with local product photos
- Create Account and Sign In pages
- A footer with help links and email signup

## How to run

From this folder:

```bash
npm install
npm run dev
```

Open the local address Vite prints, usually http://127.0.0.1:5173/ .

## Sign in

1. Open Sign In, then Create an account.
2. Enter email, first name, last name, and password.
3. After signup you land on the home page as signed in.
4. Sign Out, then Sign In again with the same email and password.
5. Wrong password stays on the login page.

## Project layout

```text
src/
  Components/   header, navbar, dashboard, footer
  Pages/        home, login, signup
  Router/       app routes
public/Static/Images/   local banners, icons, and product photos
```
