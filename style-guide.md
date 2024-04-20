# Portfolio style-guide

This portfolio site was built to be responsive across three devices: 

- Mobile
- Tablet
- Desktop

## Colors

```css
--galactic-blue: hsl(225, 66%, 62%); 
--light-red: hsl(7, 77%, 66%); 
--black: hsl(0, 0%, 1%); 
--summer-yellow: hsl(28, 89%, 67%); 
--cyan: hsl(172, 46%m 57%); 
--medium-brown: hsl(30, 5%, 45%); 
--pink: hsl(0, 78%, 79%); 
--dark-purple: hsl(314, 45%, 23%); 
--light-cream: hsl(28, 100%, 97%); 
--white: hsl(0, 0%, 100%); 
```

## Gap

```css
--gap-0: 0px;
--gap-1: 1px;
--gap-1_25: 0.125rem;
--gap-2_5: 0.25rem;
--gap-3_75: 0.375rem;
--gap-5: 0.5rem;
--gap-6_25: 0.625rem;
--gap-7_5: 0.75rem;
--gap-8_75: 0.875rem;
--gap-10: 1rem;
--gap-12_5: 1.25rem;
--gap-15: 1.5rem;
--gap-17_5: 1.75rem;
--gap-20: 2rem;
--gap-22_5: 2.25rem;
--gap-27_5: 2.75rem;
--gap-30: 3rem;
--gap-35: 3.5rem;
--gap-40: 4rem;
--gap-50: 5rem;
--gap-60: 6rem;
--gap-70: 7rem;
--gap-80: 8rem;
--gap-90: 9rem;
--gap-100: 10rem;
--gap-110: 11rem;
--gap-120: 12rem;
--gap-130: 13rem;
--gap-140: 14rem;
--gap-150: 15rem;
--gap-160: 16rem;
--gap-180: 18rem;
--gap-200: 20rem;
--gap-240: 24rem;
```

## Display

```css
--hidden: none;
--block: block;
--inline: inline;
--inline-block: inline-block;
--flex: flex;
--inline-flex: inline-flex;
--grid: grid;
--inline-grid: inline-grid;
```

## Radius

```css
--radius-1: 2px;
--radius-2: 4px;
--radius-3: 6px;
--radius-4: 8px;
--radius-5: 10px; 
--radius-6: 12px;
--radius-7: 16px;
--radius-8: 20px;
--radius-9: 24px;
--radius-10: 26px;
--radius-11: 28px;
--radius-12: 30px;
--radius-13: 32px;
--radius-14: 34px;
--radius-15: 36px;
--radius-16: 38px;
--radius-17: 40px;
```

## Typography

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
```

```css
--ff-plus-jakarta-sans: var(--ff-plus-jakarta-sans), sans-serif;
--ff-plus-jakarta-sans: 'Plus Jakarta Sans';
--fw-100: 100;
--fw-200: 200;
--fw-300: 300;
--fw-400: 400;
--fw-500: 500;
--fw-600: 600;
--fw-700: 700;
--fw-800: 800;
--font-style: normal; 
--line-height-none: 1;
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;
--letter-spacing-tighter: -0.05em;
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0em;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
--letter-spacing-widest: 0.1em;

/* Font Sizes */
--font-size-0: clamp(0.625rem, 0.53rem + 0.6612vi, 1.125rem);
--font-size-1: clamp(0.8331rem, 0.6707rem + 1.1298vi, 1.6875rem);
--font-size-2: clamp(1.1106rem, 0.8405rem + 1.8786vi, 2.5313rem);
--font-size-3: clamp(1.4804rem, 1.04rem + 3.0631vi, 3.7969rem);

```

## Spacing

```css
  --space-1: clamp(0.1875rem, 0.1637rem + 0.1653vi, 0.3125rem);
  --space-2: clamp(0.3125rem, 0.265rem + 0.3306vi, 0.5625rem);
  --space-3: clamp(0.5rem, 0.4287rem + 0.4959vi, 0.875rem);
  --space-4: clamp(0.625rem, 0.53rem + 0.6612vi, 1.125rem);
  --space-5: clamp(0.9375rem, 0.7949rem + 0.9917vi, 1.6875rem);
  --space-6: clamp(1.25rem, 1.0599rem + 1.3223vi, 2.25rem);
  --space-7: clamp(1.875rem, 1.5899rem + 1.9835vi, 3.375rem);
  --space-8: clamp(2.5rem, 2.1198rem + 2.6446vi, 4.5rem);
  --space-9: clamp(3.75rem, 3.1798rem + 3.9669vi, 6.75rem);
  --space-1-2: clamp(0.1875rem, 0.1162rem + 0.4959vi, 0.5625rem);
  --space-2-3: clamp(0.3125rem, 0.2056rem + 0.7438vi, 0.875rem);
  --space-3-4: clamp(0.5rem, 0.3812rem + 0.8264vi, 1.125rem);
  --space-4-5: clamp(0.625rem, 0.423rem + 1.405vi, 1.6875rem);
  --space-5-6: clamp(0.9375rem, 0.688rem + 1.7355vi, 2.25rem);
  --space-6-7: clamp(1.25rem, 0.8461rem + 2.8099vi, 3.375rem);
  --space-7-8: clamp(1.875rem, 1.376rem + 3.4711vi, 4.5rem);
  --space-8-9: clamp(2.5rem, 1.6921rem + 5.6198vi, 6.75rem);  
  --space-4-6: clamp(0.625rem, 0.3161rem + 2.1488vi, 2.25rem);
```