# nx-nestjs-nextjs-reactadmin
A NX monorepo POC with a NestJS backend, a front website using NextJS and an admin website using React-Admin.

## Architecture
This project is built with the NX monorepo build system providing a single dependencies folder for all apps :
  - **NestJS** - A backend Restful API connected to a PostGreSQL database.
  - **ReactAdmin** - For managing the backoffice.
  - **NextJS** - The public front application.

All apps are using Typescript. 

Nx is providing aliases for managing custom shared dependencies between all apps, for example :
- Common types definition
- Common UI components
- Etc...

### Get started


```sh
# Create a new monorepo with the following command
npx create-nx-workspace happynrwl --preset=ts
```
