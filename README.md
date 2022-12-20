# **Svelte Tooltip**

## **Description**

A simple svelte tooltip that's:

-   **TypeScript First**
-   **Auto-Positioning**
-   **Customizable With Props**
-   **Easy To Use**

---

## **Demo**

[Demo Site](https://bobbymannino.vercel.app/svelte-tooltip)

---

## **Installation**

```
npm install --save-dev @bobbymannino/svelte-tooltip
```

---

## **Usage**

```html
<!-- +page.svelte -->

<script lang="ts">
	import { Tooltip } from "@bobbymannino/svelte-tooltip";
</script>

<p>
	This is an example usage of the <Tooltip tip="Isn't is cool!"><b>Svelte Tooltip</b></Tooltip> package from @bobbymannino
</p>
```

---

## **Configuration**

```html
<!-- +page.svelte -->

<p>
	This is an example usage of the <Tooltip tip="<h2>Isn't is cool!</h2>" background="#ffffff" color="#000000"><b>Svelte Tooltip</b></Tooltip> package from @bobbymannino
</p>
```

| Property Name | Property Type                         | Property Default |
| :------------ | :------------------------------------ | :--------------- |
| tip           | 'any HTML represented as a string     |                  |
| background    | any CSS color represented as a string | '#000000cc'      |
| color         | any CSS color represented as a string | '#ffffff'        |

---

## **Bugs & Features**

Submit all bugs and/or feature requests to the [issues panel](https://github.com/bobbymannino/svelte-tooltip/issues) panel on GitHub
