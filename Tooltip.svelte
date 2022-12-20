<script>import { browser } from "$app/environment";
export let tip;
export let background = "#000000cc";
export let color = "#ffffff";
let tooltip;
const EDGE_MARGIN = 16;
$:
  tooltipBox = tooltip?.getBoundingClientRect();
$:
  y = tooltipBox?.top < EDGE_MARGIN ? "below" : "above";
$:
  x = browser && tooltipBox?.right + EDGE_MARGIN > window.innerWidth ? "right" : tooltipBox?.left > EDGE_MARGIN ? "middle" : "left";
</script>

<div>
	<slot />
	<span bind:this={tooltip} data-x={x} data-y={y} style="--text-color: {color}; --background-color: {background}">{@html tip}</span>
</div>

<style>
	div {
		position: relative;
		display: inline-block;
		cursor: default;
	}

	span {
		position: absolute;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		z-index: 9999;
		width: 10rem;
		color: var(--text-color);
		background-color: var(--background-color);
		pointer-events: none;
		text-align: center;
		opacity: 0;
		line-height: 1.25;
		font-size: 1rem;
		font-weight: normal;
		transition: opacity 200ms ease, translate 200ms ease;
	}

	div:hover span {
		opacity: 1;
		translate: none;
	}

	span:after {
		content: "";
		position: absolute;
		border: 0.33rem solid transparent;
	}

	span[data-y="above"] {
		bottom: calc(100% + 0.25rem);
		translate: 0 0.25rem;
	}
	span[data-y="above"]:after {
		bottom: -0.64rem;
		border-top-color: var(--background-color);
	}

	span[data-y="below"] {
		top: calc(100% + 0.25rem);
		translate: 0 -0.25rem;
	}
	span[data-y="below"]:after {
		top: -0.64rem;
		border-bottom-color: var(--background-color);
	}

	span[data-x="left"] {
		left: 0;
	}
	span[data-x="left"]:after {
		left: 0.5rem;
	}

	span[data-x="middle"] {
		left: 50%;
		transform: translateX(-50%);
	}
	span[data-x="middle"]:after {
		left: 50%;
		transform: translateX(-50%);
	}

	span[data-x="right"] {
		right: 0;
	}
	span[data-x="right"]:after {
		right: 0.5rem;
	}
</style>
