from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

WIDTH, HEIGHT = 1200, 630
BG = (7, 17, 15)
PANEL = (13, 31, 27)
TEXT = (247, 250, 249)
MUTED = (183, 204, 198)
ACCENT = (74, 222, 175)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "og-image.png"
OUT.parent.mkdir(parents=True, exist_ok=True)

img = Image.new("RGB", (WIDTH, HEIGHT), BG)
draw = ImageDraw.Draw(img)

font_regular = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
font_bold = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

name_font = ImageFont.truetype(font_bold, 64)
title_font = ImageFont.truetype(font_regular, 34)
label_font = ImageFont.truetype(font_bold, 24)
small_font = ImageFont.truetype(font_regular, 24)

# subtle frame/panel
margin = 54
draw.rounded_rectangle(
    (margin, margin, WIDTH - margin, HEIGHT - margin),
    radius=32,
    fill=PANEL,
    outline=(31, 73, 62),
    width=2,
)

# accent line
draw.rounded_rectangle((92, 104, 180, 114), radius=5, fill=ACCENT)

# main copy
draw.text((92, 146), "Kirill Kuznetsov", font=name_font, fill=TEXT)
draw.text(
    (92, 236),
    "Data Automation · Database · Applied ML",
    font=title_font,
    fill=MUTED,
)

# compact skill chips
chips = ["Python", "SQL Server", "ETL", "Excel/VBA", "Automation", "Machine Learning"]
x, y = 92, 326
for chip in chips:
    bbox = draw.textbbox((0, 0), chip, font=label_font)
    chip_w = bbox[2] - bbox[0] + 42
    if x + chip_w > WIDTH - 92:
        x = 92
        y += 64
    draw.rounded_rectangle((x, y, x + chip_w, y + 48), radius=24, outline=(54, 101, 89), width=2)
    draw.text((x + 21, y + 10), chip, font=label_font, fill=TEXT)
    x += chip_w + 14

# footer
draw.text((92, HEIGHT - 112), "Portfolio & selected case studies", font=small_font, fill=MUTED)
draw.text((WIDTH - 438, HEIGHT - 112), "kkkuznetsov.github.io/kuznet-cv", font=small_font, fill=ACCENT)

img.save(OUT, format="PNG", optimize=True)
print(f"Generated {OUT} ({WIDTH}x{HEIGHT})")
