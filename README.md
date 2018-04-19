# synthetik-css

A _stupidly_ #simple style guide.

## The nitty gritty

So you want to know how the heck it does the things. The answers to all your heart's burning questions are just after this sentence!

### Breakpoints

Synthetik models [Bootstrap's approach](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints) to breakpointing on the basis of viewport width, and adopts Bootstrap's standard set of breakpoints (`xs`, `sm`, `md`, `lg`, and `xl`).

In addition, Synthetik _extends_ that list by adding two breakpoints beyond the `xl` width:

* **`xxl`** for Full HD (i.e. 2K) viewports. (`>= 1520px`)
* **`qhd`** for Quad HD and larger viewports. (`>= 2100px`)

> These super-wide breakpoints help to future-proof the design you make today, as unscaled 4K+ viewing may become common on physically-large displays. But mostly, they're backed into the code now ~~to satisfy my selfish want to see~~ to **encourage** more sites to take advantage of all 4000 pixels of screen width and make awesome satisfying full-screen websurfing experiences. #4Kalltheway !

Breakpoint | Begins at width
--- | --- | ---
`xs` | 1px
`sm` | 576px
`md` | 768px
`lg` | 992px
`xl` | 1200px
`xxl` | 1520px
`qhd` | 2100px

### Gridding

> This ain't your mama's cookin' (but it ain't edible either)

As with breakpoints, the maximum width for a non-fluid container follows Bootstrap's lead for `xs` through `xl` breakpoints, and applies similar logic to containers viewed through `xxl` viewports.

> Note that the **`xs` breakpoint containers span the entire width** of the viewport, as they have no defined maximum width, and so aren't mentioned in the table below.

Breakpoint | var(`--container-width-max`)
--- | ---
`sm` | 540px
`md` | 720px
`lg` | 960px
`xl` | 1140px
`xxl` | 1440px
`qhd` | 1980px

### Text sizing

The normal size of body text is set at the root level (`:root` or `<html>`), and is stepped roughly in proportion to the viewport's width.

Breakpoint | `$base-font-size`
--- | ---
`xs` | 16px
`sm` | 16px
`md` | 17px
`lg` | 18px
`xl` | 20px
`xxl` | 22px
