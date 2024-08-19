# Counter App - NextJS, Typescript & Testing

A small app to demonstate setup and use of NextJS, Typescript and testing with Vitest.

## Notes

A list of points learned through this exercise:

1. To use state you need to have a client component

   > This means breaking the counter into its own component is necessary. You cannot build it directly into the root level page component.

2. It's good to add types for initial values

   For the counter props I initially added just 'number' but found I could add further type safety on the initial value like so:

   ```ts
   type CounterProps = {
     initialCount?: number;
   };

   export default function Counter({ initialCount = 0 }: CounterProps) {
     const [counter, setCounter] = useState<number>(initialCount);
   }
   ```

3. Adding 'role' types to markup

   > The counter display was built in a standard div. This meant it's role was simply 'textbox' without a unique identifier. Adding "role='status'" to the div gave it a meaningful name from the perspective of a user.

4. Use of 'cleanup' in tests

   > I ran into problems with multiple elements returned when trying to use `getByRole('status')` in my third test. Vitest reported there being multiple entries when there is only one. By adding cleanup after each test, it removed the rendered component 'Counter', giving a clean setup for each test.
