FROM openjdk:8
EXPOSE 9969
Add build/libs/brownfield.jar brownfield.jar
ENTRYPOINT ["java", "-jar", "/brownfield.jar"]