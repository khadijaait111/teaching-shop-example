# Base image - using slim variant for smaller size
# slim = Python + minimal OS packages (~150MB instead of ~1GB)
FROM python:3.11-slim

# Set the working directory inside the container
# All subsequent commands will run from /app
WORKDIR /app

# TODO 1: Install uv (the Python package manager)
# Hint: Use RUN with pip install
RUN pip install uv


# TODO 2: Copy dependency files first
# This is an optimization! Docker caches each layer.
# If dependencies don't change, this layer is reused on rebuild.
COPY pyproject.toml uv.lock ./
# Syntax: COPY <source> <destination>


# TODO 3: Install Python dependencies
RUN uv sync --frozen
# The --frozen flag ensures exact versions from uv.lock are used


# Copy the rest of the application code
COPY . .

# TODO 4: Change to the Django project directory
# Hint: Use WORKDIR to change directory
WORKDIR /app/core


# TODO 5: Copy the entrypoint script and make it executable
# The entrypoint script will run migrations at startup (needed for Docker Compose with PostgreSQL later)

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose port 8000 (documentation for humans, doesn't actually publish the port)
EXPOSE 8000

# TODO 6: Use the entrypoint script as the container's entrypoint
# The entrypoint runs migrations then starts the Django server
# Hint: ENTRYPOINT ["/path/to/script"]
ENTRYPOINT ["/entrypoint.sh"]