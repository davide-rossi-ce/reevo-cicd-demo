FROM python:alpine
USER 1000:1000
WORKDIR /app
ADD index.html index.html
ADD server.py server.py
EXPOSE 8000
CMD ["python3", "server.py"]