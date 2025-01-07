```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('Component mounted');
    }, 0); // Add a small delay to ensure mount log appears

    return () => {
      clearTimeout(timeoutId); // Clear the timeout to prevent it from firing after unmount
      console.log('Component unmounting');
    };
  }, []);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```