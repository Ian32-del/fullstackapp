# Use an official python base image 
FROM python:3.11-slim

# Set Working directory 
WORKDIR /app

# Copy requirements and install them 
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt 

# Copy app code 
COPY app.py .

# Expose Flask port 
EXPOSE 5000

# Run the server
CMD [ "python" , "app.py" ]