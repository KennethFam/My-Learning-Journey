# Deployment

## Hosting Providers
- Hosting providers are like server landlords. They own servers and rent space on them to customers, who can then use the space to store their websites and make them accessible to anyone on the web.

## Static vs Dynamic Sites
- Static websites consist of pre-written HTML pages. They are “static” because everyone who visits them will see the same content. To build static sites, you only need HTML, CSS and JavaScript.
- Dynamic websites are websites that can change content based on the user who is visiting them.

## What is PaaS?
- Platform as a Service is a specific kind of hosting provider. The most important thing to know about them is they are much easier to use and more approachable for beginners than other hosting providers. They manage many of the low-level nitty-gritty details with the underlying server infrastructure, which allows us as developers to focus more of our time on building our applications instead of configuring and managing the servers they run on.

### How do they work?
- PaaS providers work by giving you easy access to a few resources that any Node app can’t live without to function on the web.

#### Instances
- The first and most crucial thing PaaS providers give you are virtual “computers” called instances which run your app. Basically, one instance means a single instance of your application running at one time. That’s like having a single computer run your app like you do on Localhost. Multiple instances are like having several copies of your app running simultaneously, which allows you to handle more traffic.

- For most of your apps, one instance is plenty enough. You can support a lot of traffic using just a single instance. Many of the PaaS providers we will recommend later in this lesson give you your first one for free.

- Learners can keep their server instance and database instance on one PaaS or use separate PaaSes if necessary. When you deal with paid plans, it might even reduce hosting costs!

#### Databases
- The second most important thing PaaS providers give you is databases. They make it easy to spin up a new database for each app by doing all the setup and configuration for you.

- Many providers even manage the database for you by setting up automatic backups, ensuring the database is constantly updated with the latest critical security patches and ongoing maintenance that keeps your databases up and running smoothly.

#### Domain Names
- PaaS providers will give you a random domain name when you first deploy.

- The domain name will always be yours on a PaaS provider. They give each app a unique domain name that’s yours as long as your app lives on their platform.

- If you are making a website for real world use, you’ll want to link it to your own custom domain, for example, `http://mycooldomain.com`. If you want a custom domain name, you can purchase one from a registrar. See this [video](https://www.youtube.com/watch?v=BfNJo3zA92A) for information on some good registrars.
    - Once you have your domain, you need to point it to your project. The provider you are using will have exhaustive documentation on using custom domain names on their platform.

### Some Recommended Paas Services

#### Website Deployment

##### Railway.app
- Can deploy both servers and databases.
    - Railway has a convenient deployment process. You link to your project’s GitHub repo.
    - Pay for what you use model.
    - $5 a month should be enough to host four applications.

- Railway.app: Free Plan
    - You get a free one-time grant of $5 on their free trial, and the applications are never put to sleep when inactive.
    - However, the longevity of your free allowance depends on how many resources you consume. More complex apps with more traffic may consume all free resources within a month, whereas simpler apps may last longer.

- Railway.app: Links
    - [Railway homepage](https://railway.app/)
    - [Railway documentation](https://docs.railway.app/)

##### Render
- Can deploy both servers and databases.
    - Render allows you to deploy using “Blueprints”, which link to your project’s GitHub repo.
    - The free 750-hour allowance is enough to host a few apps without paying anything. However, databases are separate on Render, and the lowest spec databases cost $7 each.
    - $21 a month is enough to host three applications as each app’s database will cost $7.

- Render: Free Plan
    - 750 hours of free usage per month.
    - Applications are put to sleep automatically after 15 minutes of inactivity, so the 750 free hours should be enough to host a few apps for the entire month.

- Render: Links
    - [Render homepage](https://render.com/)
    - [Render documentation](https://render.com/docs/)
    - [Guide: Official getting started with Node/Express on Render guide](https://render.com/docs/deploy-node-express-app)
    - [Guide: CodeBrah video guide for deploying Node applications to Render](https://www.youtube.com/watch?v=bnCOyGaSe84&ab_channel=CodeBrah)

##### Koyeb
- Can deploy both servers and databases.
    - Easily Git push to deploy.
    - Ability to run web apps, APIs, and workers easily.
    - SSL and 10 free custom domains

- Koyeb: Free Plan
    - One free Web service.
    - One free Postgres database (50 hours).
    - Doesn’t require a credit card to start.
    - Pay-per-use by the second for more.

- Koyeb: Links
    - [Koyeb homepage](https://www.koyeb.com/)
    - [Koyeb documentation](https://www.koyeb.com/docs)
    - [Guide: Official getting started with Node/Express on Koyeb guide](https://www.koyeb.com/docs/deploy/express)

##### Neon
- Can deploy databases only.
    - 24/7 for your main database.
    - 20 additional hours of database branching.
    - Point-in-time restore (24 Hours)
    - No credit card required.

- Neon: Free Plan
    - 0.5 GiB of storage
    - 24/7 for your main compute
    - No credit card required

- Neon: Links
    - [Neon homepage](https://neon.tech/)
    - [Neon documentation](https://neon.tech/docs/introduction)
    - [Guide: Connect a Node.js application to Neon](https://neon.tech/docs/guides/node)

##### Aiven
- Can deploy databases only.
    - 24/7 for all database services.
    - High availability and automatic backups.
    - Point-in-time recovery (varies by service).
    - No credit card required.

- Aiven: Free Plan
    - 5 GiB of storage.
    - 24/7 for all database services.
    - One free database for every service including PostgreSQL, MySQL and Redis.
    - No credit card required.

- Aiven: Links
    - [Aiven homepage](https://aiven.io/)
    - [Aiven documentation](https://aiven.io/docs/get-started)
    - [Guide: Connect a Node.js application to Aiven](https://aiven.io/docs/products/postgresql/howto/connect-node)

#### Mobile Apps

##### Apple
- For Apple, you have to deploy through their developer program.
    - Costs $99/year.
    - Upload your build to your account and fill out the necessary information.

- Apple: Links
    - [Apple's guide to deploying an iOS app](https://developer.apple.com/ios/submit/)
    - [Video on how to deploy an iOS app](https://youtu.be/bz_KJdXylh0?si=eg-Yil_zbrOS2CDV)
    - [Apple Developer Website](https://developer.apple.com/)
    - [App Sotre Connect](https://appstoreconnect.apple.com/)

## Debugging and Troubleshooting Deployments
- Errors are an inevitable part of the software development process. They especially have a habit of popping up when deploying to a new environment like a hosting provider. When this happens, the key is not to panic and to follow a calm, step-by-step debugging process.

- In most cases, you’ll be running into errors that thousands of developers have encountered before. These errors are well documented and often have solutions you can find with a little bit of Googling or Chat-GPTing.

- There are two stages of the deployment process where you are most likely to encounter problems. These are during deployment and right after.

### Node Version Compatibility
- Depending on the host provider you use, the supported Node versions and default selected version may differ. You can refer to the providers’ documentation for more information on what is supported and selected, and depending on what features you use in your code, you may need to [specify what Node versions your project is compatible with in your `package.json`](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#engines).

### On Deployment
- If you run into an error while deploying, the first thing to do is to check the build logs. Finding the build logs should be easy; it’s the stream of output you’ll see after kicking off a new deployment.

- Scroll through these logs and find the point where the deployment encountered the error. It should stand out from the rest of the output and will often look like the stack traces you’ve already seen with JavaScript/Node. The error output will tell you exactly what went wrong.

- If you don’t recognize the error or what might cause it, your next step will be to copy and paste it into your favorite online search engine or LLM (e.g. Chat GPT, Gemini, etc.). You’ll likely find a Stack Overflow post with a solution.

- Most of the errors you’ll face during this stage will be related to properly setting up your app with what your hosting provider needs. Double-checking the deployment guide for your hosting provider is always a good place to start. It’s very easy to miss a step or mistype something.

### After Deployment
- You’ve just deployed your app successfully; everything is going your way, and this will be a great day! However, when you visit your app… you are greeted with the dreaded 500 page.

- Nothing induces panic in a developer quite like a 500 page. It could mean just about anything. Error pages in production are deliberately vague to let users know something went wrong without all the overwhelming technical jargon. Another important reason is to prevent attackers from using errors in your system to their advantage.

- You have a few tools at your disposal to help you diagnose the problem. The first is the application logs.
    - The application logs are the output of your application as it’s running. It tells you what’s happening with your app as it’s happening. All the incoming requests and database queries are recorded, and you can see them being recorded in real-time.
    - So if you’re getting a 500 error, you can open up the logs and watch them closely as you refresh the page on your app in the browser to reproduce the error. This will either tell you exactly what the problem is or generate some leads you can use to dig further.

### Doing Further With Troubleshooting Tools
- As your application grows, you’ll want to get more sophisticated with your error-tracking tools. For example, you can use services like [Sentry](https://sentry.io/) to track and monitor errors using a slick, easy-to-use interface and get notified when they happen.

- These services will give you more information about the error and the request that caused it, saving you a ton of time.

### One Final Tip
- If something has broken in your latest deployment after successful deployments in the past, backtrack to the last working version to determine what changes you made and slowly reintroduce those changes again if you need to.

- You’ll be able to use `git log` to see the history of your latest changes and `git checkout` to revert to a previous working version quickly.