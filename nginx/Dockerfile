FROM docker.arvancloud.ir/nginx:stable-alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf

# remove the log files in order to remove symlink between nginx logs & container log paths to ensure logs are available in default nginx log path
RUN rm -f /var/log/nginx/*