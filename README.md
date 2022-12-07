# Twitter Clone

## Next.js + Tailwind

### Preparation of Project

`create-next-app -e with-tailwindcss twitter-clone-next`

### Notable Links

[Original-Sonny-Sangha](https://www.youtube.com/watch?v=rCselwxbUgA)
[localhost:3333](http://localhost:3333) - Sanity Local Url - Github for this project

### Scope out layout of Project.

- Sidebar
- Feed
- Widgets

##### Components Creation

---

Sidebar
SidebarRow
Feed
Widgets

### Sanity Info

## GROQ Query for Comment or Tweet Template used

---

This uses the same query language as graphql.

- you define what you expect to get back
- if I just need the id i would pass only \_id
-

```
*[_type == "comment"] {
  _id,
}


*[_type == "tweet"] {
  _id,
  ...
}
```
