```javascript
/*
====================================================
PORTFOLIO IMAGE COLLECTION

Categories:
- Weddings
- Birthday Shoots
- Events
- Products & Food

The Home gallery automatically selects 20 featured
images from this collection.

Replace sample image URLs with your own photographs
when they are ready.
====================================================
*/

const portfolioImages = [

    // ================================================
    // WEDDING PHOTOGRAPHY
    // ================================================

    {
        id: 1,
        title: "A Beautiful Beginning",
        category: "Weddings",
        featured: true,
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
        alt: "Wedding celebration and couple photography"
    },

    {
        id: 2,
        title: "Forever Together",
        category: "Weddings",
        featured: true,
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1400&q=85",
        alt: "Couple celebrating their wedding"
    },

    {
        id: 3,
        title: "The Wedding Day",
        category: "Weddings",
        featured: true,
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85",
        alt: "Wedding day photography"
    },

    {
        id: 4,
        title: "Wedding Details",
        category: "Weddings",
        featured: false,
        src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1400&q=85",
        alt: "Romantic wedding details"
    },

    {
        id: 5,
        title: "A Timeless Moment",
        category: "Weddings",
        featured: true,
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=85",
        alt: "Elegant wedding celebration"
    },

    {
        id: 6,
        title: "Wedding Romance",
        category: "Weddings",
        featured: false,
        src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1400&q=85",
        alt: "Romantic wedding photography"
    },


    // ================================================
    // BIRTHDAY PHOTOGRAPHY
    // ================================================

    {
        id: 7,
        title: "Birthday Celebration",
        category: "Birthday Shoots",
        featured: true,
        src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=85",
        alt: "Colorful birthday celebration"
    },

    {
        id: 8,
        title: "Birthday Memories",
        category: "Birthday Shoots",
        featured: true,
        src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=85",
        alt: "Birthday party decorations"
    },

    {
        id: 9,
        title: "A Special Day",
        category: "Birthday Shoots",
        featured: true,
        src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85",
        alt: "Special celebration"
    },

    {
        id: 10,
        title: "Celebrating You",
        category: "Birthday Shoots",
        featured: false,
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85",
        alt: "Celebration and birthday event"
    },

    {
        id: 11,
        title: "Beautiful Details",
        category: "Birthday Shoots",
        featured: true,
        src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1400&q=85",
        alt: "Birthday decorations and balloons"
    },


    // ================================================
    // EVENT PHOTOGRAPHY
    // ================================================

    {
        id: 12,
        title: "Special Occasions",
        category: "Events",
        featured: true,
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=85",
        alt: "Event hall and celebration"
    },

    {
        id: 13,
        title: "The Celebration",
        category: "Events",
        featured: true,
        src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1400&q=85",
        alt: "Live event and celebration"
    },

    {
        id: 14,
        title: "Unforgettable Moments",
        category: "Events",
        featured: true,
        src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1400&q=85",
        alt: "Crowd enjoying a live event"
    },

    {
        id: 15,
        title: "Event Atmosphere",
        category: "Events",
        featured: false,
        src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1400&q=85",
        alt: "Live music event"
    },

    {
        id: 16,
        title: "A Night to Remember",
        category: "Events",
        featured: true,
        src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1400&q=85",
        alt: "Event lights and audience"
    },


    // ================================================
    // PRODUCTS AND FOOD PHOTOGRAPHY
    // ================================================

    {
        id: 17,
        title: "Food and Flavour",
        category: "Products & Food",
        featured: true,
        src: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=1400&q=85",
        alt: "Beautifully presented food"
    },

    {
        id: 18,
        title: "Culinary Details",
        category: "Products & Food",
        featured: true,
        src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1400&q=85",
        alt: "Fresh food and ingredients"
    },

    {
        id: 19,
        title: "Product Styling",
        category: "Products & Food",
        featured: true,
        src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=85",
        alt: "Product photography"
    },

    {
        id: 20,
        title: "The Art of Presentation",
        category: "Products & Food",
        featured: true,
        src: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1400&q=85",
        alt: "Beauty product photography"
    },

    {
        id: 21,
        title: "Fresh and Beautiful",
        category: "Products & Food",
        featured: false,
        src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85",
        alt: "Fresh food presentation"
    },

    {
        id: 22,
        title: "Product Details",
        category: "Products & Food",
        featured: false,
        src: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1400&q=85",
        alt: "Product displayed for photography"
    }

];
```
