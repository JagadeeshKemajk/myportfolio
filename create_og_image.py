from PIL import Image, ImageDraw, ImageFont

# Create a new image with dark background
width, height = 1200, 630
image = Image.new('RGB', (width, height), color='#0F172A')
draw = ImageDraw.Draw(image)

# Fill with gradient (top to bottom from #0F172A to #1E293B)
for y in range(height):
    r = int(15 + (30 - 15) * (y / height))
    g = int(23 + (41 - 23) * (y / height))
    b = int(42 + (59 - 42) * (y / height))
    draw.rectangle([(0, y), (width, y + 1)], fill=(r, g, b))

# Draw cyan accent bar at top
draw.rectangle([(0, 0), (width, 8)], fill='#06B6D4')

# Try to use system fonts
try:
    title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 72)
    subtitle_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 48)
    text_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 28)
    tagline_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 20)
except:
    title_font = subtitle_font = text_font = tagline_font = ImageFont.load_default()

# Add text
draw.text((60, 200), "Jagadeesh Kema", font=title_font, fill='#FFFFFF')
draw.text((60, 300), ".NET Developer", font=subtitle_font, fill='#06B6D4')
draw.text((60, 370), "3.9+ Years • ASP.NET Core • C# • AWS", font=text_font, fill='#CBD5E1')
draw.text((60, 500), "Crafting scalable web solutions with modern technologies", font=tagline_font, fill='#94A3B8')

# Add decorative circles
draw.ellipse([(1050, 50), (1150, 150)], outline='#06B6D4', width=2)
draw.ellipse([(50, 500), (130, 580)], outline='#0EA5E9', width=2)

# Save as PNG
image.save('/Users/jagadeeshkema/Documents/myportfolio/public/og-image.png')
print("PNG preview image created successfully!")
