# Test task

## Getting Started

First, run the development server:

1. npm i
2. npm run start

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Code Style Conventions and Recommendations

| **Object**                         | **Notation**          | **Example**           | **Note**                                           |
| ---------------------------------- | --------------------- | --------------------- | -------------------------------------------------- |
| Image names                        | kebab-case            | ('my-image.png')      |
| File names                         | kebab-case            | ('my-file.js')        |
| Components names                   | PascalCase            | ('MyCustomComponent') |
| Variable names                     | camelCase             | ('fooVar')            |
| Function names                     | camelCase             | ('myFunc')            |
| Types Interfaces and classes names | PascalCase            | (Interface) (Type)    |
| SCSS/CSS Class names               | snake_case            | ('my_class')          | (this, because Next.js doesn't support kebab-case) |
| Env variables                      | UPPER_CASE_SNAKE_CASE | ('MY_VAR')            |

- Note: Library CSS class names need to be same as library. (In most cases, kebab-case)
- Overridden library classes should be in Globals.scss
- Env variables: UPPER_CASE_SNAKE_CASE ('MY_VAR')
- Please use ' instead of " in JSX, unless otherwise necessary. E.g. `<div className='class'></div>`
- For media-queries, please use the ones provided in media-queries.scss, or utility classes from Tailwind.

### General Types

- Don’t ever use the types Number, **String, Boolean, Symbol,** or **Object**. These types refer to non-primitive boxed objects that are almost never used appropriately in JavaScript code. Do use the types **number, string, boolean,** and **symbol**.

```
// bad
function reverse(s: String): String;

// good
function reverse(s: string): string;
```

### Variable

- Use **const** for all of your references; avoid using **var**.
- Use **let** for all of your mutations; avoid using **var**. Block scope

### Functions

- Don’t write several overloads that differ only in trailing parameters. Do use optional parameters whenever possible.

This is important for a reason:

TypeScript resolves signature compatibility by seeing if any signature of the target can be invoked with the arguments of the source, _and extraneous arguments are allowed._

```
// bad
interface Example {
    diff(one: string): number;
    diff(one: string, two: string): number;
    diff(one: string, two: string, three: boolean): number;
}


// good
interface Example {
    diff(one: string, two?: string, three?: boolean): number;
}
```

### Null vs. Undefined

- Prefer not to use either for explicit unavailability.

**Reason**
These values are commonly used to keep a consistent structure between values. In TypeScript you use types to denote the structure

### Type vs. Interface

- Use type when you might need a union or intersection:
  `type Foo = number | { someProperty: number }`

- Use interface when you want extends or Classes can implements e.g

```
interface Foo {
  foo: string;
}
interface FooBar extends Foo {
  bar: string;
}
class X implements FooBar {
  foo: string;
  bar: string;
}
```

## Version control

We are using the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for this project.

### Branches

- **main**: The main branch where the source code of HEAD always reflects a production-ready state.
- **develop**: The main branch where the source code of HEAD always reflects a state with the latest delivered development changes for the next release. Some would call this the “integration branch”. This is where any automatic nightly builds are built from.
- **feature branches**: Each new feature should reside in its own branch, which can be pushed to the central repository for backup/collaboration. But, **all feature branches should be merged into develop**.
- **release branches**: When the develop branch has acquired enough features for a release (or a predetermined release date is approaching), you fork a release branch off of develop. Creating this branch starts the next release cycle, so no new features can be added after this point—only bug fixes, documentation generation, and other release-oriented tasks should go in this branch. Once it is ready to ship, the release branch gets merged into main and develop.
- **hotfix branches**: Maintenance or “hotfix” branches are used to quickly patch production releases. This is the only branch that should fork directly off of main. As soon as the fix is complete, it should be merged into both main and develop.

### Commit messages

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Pull Requests

- **All pull requests should be made to the develop branch**.
- **All pull requests should be reviewed by at least one other developer**.
- **All pull requests should have a descriptive title and description**.
- **All pull requests should be linked to an issue**.
