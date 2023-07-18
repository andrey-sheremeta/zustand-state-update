# zustand-state-update incosistency problem

### How to reproduce
1. open console in the browser
2. navigate to the about page

Actual:
```
During the first rendering, we use home page props.
> render about page Home_page_name

After rerendering it picks up props from getServerSide.
> render about page About_page_name
```

Expected:
```
The first rendering of a page should use its own props received from getServerSide, so it should be:
> render about page About_page_name
```
