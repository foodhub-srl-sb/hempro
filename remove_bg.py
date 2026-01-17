from PIL import Image
import os

def remove_white_bg(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Check for white (or near white) pixels
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0)) # Make transparent
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Saved to {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Paths
base_dir = "C:/Users/fabio/.gemini/antigravity/brain/797ec318-b77e-4665-ac6d-2a00b6741341"
target_dir = "C:/Users/fabio/Desktop/Hempro/frontend/public/images/icons"

icons = [
    ("tractor_white_bg", "icon-tractor.png"),
    ("microscope_white_bg", "icon-microscope.png"),
    ("pot_white_bg", "icon-pot.png")
]

# Find the latest generated file for each
for icon_name, output_name in icons:
    files = [f for f in os.listdir(base_dir) if f.startswith(icon_name) and f.endswith(".png")]
    if files:
        # Sort by modification time to get the latest
        latest_file = max([os.path.join(base_dir, f) for f in files], key=os.path.getmtime)
        output_path = os.path.join(target_dir, output_name)
        remove_white_bg(latest_file, output_path)
    else:
        print(f"No file found for {icon_name}")
