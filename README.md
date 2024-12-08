# BlogMarshal

**BlogMarshal** is a comprehensive blogging platform built with modern web technologies, including Next.js 15, Kinde Auth, Supabase, Prisma, Stripe, and Tailwind CSS. It is designed to enable users to create, manage, and monetize their blogs effectively. The project is inspired by the course [Create a SaaS using Next.js 15, Kinde Auth, Supabase, Prisma, Stripe, and Tailwind CSS](https://janmarshal.com/courses/create-a-saa-s-using-next-js-15-kinde-auth-supabase-prisma-stripe-and-tailwind-css).

## Features

- **User Authentication**: Secure login and registration using Kinde Auth.
- **Blog Management**: Create, edit, and manage blog posts with an intuitive editor.
- **Subscription Model**: Monetize blogs with Stripe payment integration.
- **Database Management**: Data persistence and management powered by Supabase and Prisma.
- **Responsive Design**: Tailwind CSS for a fully responsive and beautiful user interface.
- **SaaS Architecture**: Built to scale and support multiple users with role-based access.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Authentication**: [Kinde Auth](https://kinde.com/)
- **Database**: [Supabase](https://supabase.com/), [Prisma](https://www.prisma.io/)
- **Payment**: [Stripe](https://stripe.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:

- Node.js (>= 18.x)
- Yarn or npm
- A Supabase account
- A Kinde account
- A Stripe account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ski043/BlogMarshal.git
   cd BlogMarshal
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Create a `.env` file and add your Supabase and Kinde API keys:

   ```bash
   cp .env.example .env
   ```

4. Run the development server:

   ```bash
   yarn dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### Scripts

- dev: Starts the development server.
- build: Builds the application for production.
- start: Starts the production server.
- lint: Runs linters and checks for code style violations.
- prismaStudio: Starts Prisma Studio for database management.

### Deployment

The application can be easily deployed to [Vercel](https://vercel.com/):

  1. Connect your repository to Vercel.
  2. Add the necessary environment variables in the Vercel dashboard.
  3. Deploy the application.

### Contributing

We welcome contributions to the project. Please follow the [Contributing Guidelines](https://github.com/ski043/BlogMarshal/blob/main/CONTRIBUTING.md).

### License

This project is licensed under the [MIT License](https://github.com/ski043/BlogMarshal/blob/main/LICENSE).
