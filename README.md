# 🎁 Gift Wishlist Website

A simple and beautiful wishlist website to share gift ideas with friends and family. Perfect for birthdays, holidays, or any special occasion!

## ✨ Features

- 🎨 Beautiful gradient design with smooth animations
- 📱 Fully responsive (works on mobile, tablet, and desktop)
- 🔧 Easy to manage - add/remove items through admin panel
- 🚀 Works on GitHub Pages (free hosting!)
- 💾 No database needed - uses simple JavaScript file
- 🌐 Two separate pages: public view and private admin

## 📁 Project Structure

```
wishlist/
├── index.html      # Public page - share this with everyone
├── admin.html      # Admin page - only for you to manage items
├── gifts.js        # Data file with all gift items
└── README.md       # This file
```

## 🚀 Quick Start

### Option 1: Use Locally

1. Download all files to a folder
2. Open `admin.html` in your browser
3. Click "Load Sample Data" to see example items
4. Add or remove items as you like
5. Click "Download gifts.js" to save your changes
6. Replace the old `gifts.js` with the new one
7. Open `index.html` to see your wishlist!

### Option 2: Host on GitHub Pages (Recommended)

1. Create a new GitHub repository
2. Upload these files:
   - `index.html`
   - `gifts.js`
   - `README.md`
3. Go to Settings → Pages
4. Enable GitHub Pages (select main branch)
5. Your site will be live at: `https://yourusername.github.io/repository-name`

**Note:** You can keep `admin.html` on your computer - no need to upload it to GitHub!

## 🎯 How to Use

### For Visitors (index.html)
- Simply open the website to see the gift list
- Click "View Item →" to see product links
- Browse through all gift ideas with descriptions and prices

### For Admin (admin.html)
1. Open `admin.html` in your browser
2. Fill in the form to add new items:
   - **Item Name** (required)
   - **Description** (optional)
   - **Price** (optional)
   - **Link** (optional)
3. Click "Add to List"
4. Remove items by clicking the "Remove" button
5. When done, click "Download gifts.js"
6. Replace the old `gifts.js` file with the new one
7. Upload to GitHub or refresh your local page

## 🎨 Customization

### Change Colors
Edit the CSS in `index.html` or `admin.html`:

```css
/* Main gradient background */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Button colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Text
Edit the header section in `index.html`:

```html
<h1>🎁 Gift Ideas for Min</h1>
<p class="subtitle">Wishlist - Feel free to check it out!</p>
```

### Edit Items Manually
Open `gifts.js` in a text editor and modify the JSON data:

```javascript
{
  "name": "Your Item Name",
  "description": "Item description here",
  "price": "$50",
  "link": "https://example.com"
}
```

## 📝 Data Format

The `gifts.js` file uses this format:

```javascript
const GIFTS_DATA = [
  {
    "name": "Item Name",           // Required
    "description": "Details...",   // Optional
    "price": "$50",                // Optional
    "link": "https://..."          // Optional
  },
  // More items...
];
```

## 🔧 Troubleshooting

### Items not showing up?
- Make sure `gifts.js` is in the same folder as `index.html`
- Check that the file name is exactly `gifts.js` (case-sensitive)
- Open browser console (F12) to check for errors

### Changes not appearing?
- Hard refresh the page (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache
- Make sure you replaced the old `gifts.js` file

### Admin page not saving?
- The admin page uses localStorage (browser memory)
- Click "Download gifts.js" to save permanently
- Don't forget to replace the old file!

## 🌟 Tips

- **Keep admin.html private** - it's just for you to manage items
- **Share index.html** - this is the public-facing page
- **Backup your gifts.js** - keep a copy in case you need to restore
- **Update regularly** - keep your wishlist fresh with new items
- **Add descriptions** - help people understand why you want each item
- **Include links** - make it easy for people to find and purchase items

## 🎉 Sample Items Included

The project comes with 15 sample items including:
- Polo Shirt
- Steam Gift Card
- Lego One Piece Set
- Electric Scooter
- BBQ Kit
- And more!

Click "Load Sample Data" in admin.html to see them all.

## 📄 License

Free to use for personal projects. Modify and share as you like!

## 🤝 Contributing

Feel free to customize this project for your needs. Some ideas:
- Add images for each item
- Create categories (clothes, games, tech, etc.)
- Add a "purchased" status
- Include priority levels
- Add multiple wishlists

## 💬 Support

If you need help:
1. Check the Troubleshooting section above
2. Make sure all files are in the same folder
3. Verify file names are correct (case-sensitive)
4. Check browser console for errors (F12)

---

Made with 💜 for sharing gift ideas with loved ones!
