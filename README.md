# BlogNest

**BlogNest** is a sleek and modern blogging platform designed to empower writers and creators to share their content seamlessly. With an intuitive interface, professional design, and robust functionality, BlogNest is your go-to platform for impactful blogging.

## Features

- **User Authentication**: Secure login and signup functionalities.
- **Post Management**: Create, edit, delete, and manage your blog posts.
- **Image Integration**: Upload featured images with lazy loading for performance.
- **Rich Text Editor**: A robust editor with formatting options for beautiful posts.
- **Responsive Design**: Works seamlessly on all devices, from desktops to mobiles.
- **Dark Theme**: A visually appealing and comfortable dark mode UI.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Appwrite for APIs and database management
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **Styling**: Tailwind CSS

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/blognest.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd blognest
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   REACT_APP_APPWRITE_URL=your-appwrite-endpoint
   REACT_APP_APPWRITE_PROJECT_ID=your-project-id
   REACT_APP_APPWRITE_DATABASE_ID=your-database-id
   REACT_APP_APPWRITE_COLLECTION_ID=your-collection-id
   ```

5. **Run the application**:
   ```bash
   npm start
   ```

   The app will be accessible at `http://localhost:3000`.

## Usage

1. **Sign Up**:
   - Create a new account to start blogging.

2. **Create a Post**:
   - Navigate to the "Add Post" page and use the rich text editor to create content.

3. **Manage Posts**:
   - Edit or delete your posts from the "My Posts" section.

4. **Read Posts**:
   - Explore and read blog posts on the homepage.

## Folder Structure

```plaintext
blognest/
├── public/        # Static files
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Individual pages (e.g., Home, Login, Post)
│   ├── store/       # Redux store and slices
│   ├── routes/      # Application routes
│   ├── appwrite/    # Appwrite integration
│   └── index.js     # Entry point
├── .env             # Environment variables
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request on GitHub.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Acknowledgements

- [React](https://reactjs.org/)
- [Appwrite](https://appwrite.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

---

**BlogNest** - Empowering content creators to share their stories effortlessly.
