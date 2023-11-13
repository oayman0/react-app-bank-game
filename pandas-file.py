import pandas as pd
import json

# Load the Excel file
df = pd.read_excel('data.xlsx')

# Extract the values from the Excel column
values = df['Column1'].tolist()

# Split the values into chunks of 10
chunks = [values[i:i + 10] for i in range(0, len(values), 10)]

# Create a dictionary with numbered keys and the corresponding chunks
result = {str(i + 1): chunk for i, chunk in enumerate(chunks)}

# Save the result as a JSON file
with open('output.json', 'w', encoding='utf-8') as json_file:
    json.dump(result, json_file, ensure_ascii=False, indent=4)

print("JSON file 'output.json' has been created.")
