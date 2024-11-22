# AI Code Generation Prompt

## Objective
Build a **modern, responsive web platform** using **ReactJS**, **Vite**, **TypeScript**, **TailwindCSS**, and **ShadCN UI**. The platform should enable individual professionals and small businesses to:  
- Manage profiles.  
- Schedule meetings.  
- Sell digital products like eBooks and PDFs.  

The application should be **user-friendly**, **aesthetically pleasing**, and optimized for both **desktop** and **mobile**. Use the provided color palette for a consistent and visually appealing design.

---

## Color Palette
The platform should use the following color palette:  

```javascript
const colors = {
  amaranth_purple: { DEFAULT: '#a40e4c', 100: '#21030f', 200: '#42061f', 300: '#63092e', 400: '#830b3d', 500: '#a40e4c', 600: '#e11469', 700: '#ef488e', 800: '#f485b3', 900: '#fac2d9' },
  space_cadet: { DEFAULT: '#2c2c54', 100: '#090911', 200: '#121221', 300: '#1a1a32', 400: '#232343', 500: '#2c2c54', 600: '#464686', 700: '#6969b0', 800: '#9b9bca', 900: '#cdcde5' },
  ash_gray: { DEFAULT: '#acc3a6', 100: '#202b1d', 200: '#40563b', 300: '#608158', 400: '#84a67c', 500: '#acc3a6', 600: '#bdcfb9', 700: '#cedbca', 800: '#dee7dc', 900: '#eff3ed' },
  light_orange: { DEFAULT: '#f5d6ba', 100: '#4c290b', 200: '#985216', 300: '#e07c24', 400: '#eba970', 500: '#f5d6ba', 600: '#f7dfc9', 700: '#f9e7d7', 800: '#fbefe4', 900: '#fdf7f2' },
  atomic_tangerine: { DEFAULT: '#f49d6e', 100: '#411a05', 200: '#83340a', 300: '#c44e0f', 400: '#ef6f2b', 500: '#f49d6e', 600: '#f6af89', 700: '#f8c3a7', 800: '#fbd7c4', 900: '#fdebe2' }
};
```
# AI Code Generation Prompt

## Key Features

### **Landing Page**
1. **Hero Section**:  
   - Captivating headline, subheadline, and call-to-action button (CTA).  
   - Use `amaranth_purple` for CTAs and `space_cadet` for the background.  

2. **Three-Step Process**:  
   - Illustrate *Create Booking*, *Customize Scheduling Page*, and *Set Availability* with visually appealing icons.  
   - Use `light_orange` for step highlights and `atomic_tangerine` for icons.

3. **Benefits Section**:  
   - Highlight advantages like easy scheduling, payment integration, and team collaboration in a grid layout.  

---

### **Dashboard**
- Overview of:  
  - **Upcoming Meetings**.  
  - **Digital Products Sold**.  
  - **Activity Logs**.  
- Display in cards styled with **TailwindCSS grids**.  
- Add **action buttons** like "Create New Booking," "Add Availability," and "Add Product."  
- Use **ShadCN UI components** for modals and interactive elements.  

---

### **Booking Scheduler**
1. **Booking Form**:  
   - Input fields for meeting title, description, and time.  
   - Styled with TailwindCSS and interactive features using **ShadCN UI**.  

2. **Availability Settings**:  
   - Drag-and-drop or interactive time-slot selector.  
   - Allow syncing with Google and Outlook calendars.  

3. **Shareable Links**:  
   - Generate meeting links styled with `amaranth_purple` CTAs.  

---

### **Digital Product Store**
1. **Product Grid**:  
   - Showcase eBooks, PDFs, or courses with preview images, titles, and prices.  
   - Use **atomic_tangerine** for hover effects on "Add to Cart" buttons.  

2. **Purchase Flow**:  
   - Simple and secure checkout interface integrating payment methods like Stripe.  

---

### **Customizable Profiles**
1. Allow users to:  
   - Add profile picture, bio, and links.  
   - Style booking pages with custom colors, fonts, and logos.  

2. Use **ShadCN UI components** for an intuitive profile editing experience.  

---

### **Team Management**
- Show team members’ profiles, availability, and meeting preferences.  
- Provide dropdown options to route meetings to the right team member.  

---

## Technical Implementation

### **Frontend Stack**:  
- Use **ReactJS** for component-based architecture.  
- Configure **Vite** for fast builds and hot module replacement.  

### **TypeScript**:  
- Ensure type safety and scalability.  

### **TailwindCSS**:  
- Use the provided color palette for consistent styling.  
- Utilize utility classes for responsive design.  

### **ShadCN UI**:  
- Implement modals, date pickers, and form components.  

---