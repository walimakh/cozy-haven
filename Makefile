# Cozy Haven E-commerce Website - Makefile
# Project: React + Vite + TypeScript + Tailwind CSS

.PHONY: help install dev build preview clean lint format

# Default target
help:
	@echo "Cozy Haven - Available Commands:"
	@echo ""
	@echo "  make install    - Install project dependencies using pnpm"
	@echo "  make dev        - Start development server (http://localhost:5173)"
	@echo "  make build      - Build production bundle"
	@echo "  make preview    - Preview production build locally"
	@echo "  make lint       - Run ESLint code checks"
	@echo "  make format     - Format code with Prettier"
	@echo "  make clean      - Remove node_modules and build artifacts"
	@echo ""

# Install dependencies
install:
	@echo "Installing dependencies with pnpm..."
	pnpm install

# Start development server
dev:
	@echo "Starting Cozy Haven development server..."
	@echo "Server will be available at http://localhost:5173"
	pnpm dev

# Build for production
build:
	@echo "Building Cozy Haven for production..."
	pnpm build

# Preview production build
preview:
	@echo "Previewing production build..."
	pnpm preview

# Run linter
lint:
	@echo "Running ESLint..."
	pnpm lint

# Format code
format:
	@echo "Formatting code with Prettier..."
	pnpm format

# Clean build artifacts and dependencies
clean:
	@echo "Cleaning build artifacts and dependencies..."
	rm -rf node_modules
	rm -rf dist
	rm -rf dist-ssr
	rm -f pnpm-lock.yaml
	@echo "Clean complete!"
