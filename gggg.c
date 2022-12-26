#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Function prototype
char* read_line(FILE* fp);

int main(int argc, char** argv)
{
  // Open the file for reading
  FILE* fp = fopen("asd.txt", "r");
  if (fp == NULL) {
    // Handle the error
    return 1;
  }

  // Read and print each line in the file
//   char* line;
//   while ((line = read_line(fp)) != NULL) {
//     printf("%s\n", line);
//     free(line);
//   }
  char* line = read_line(fp);
  printf("%s\n", line);
  // Close the file
  fclose(fp);

  return 0;
}

// Function definition
char* read_line(FILE* fp)
{
  // Create a buffer to hold the line
  const size_t line_size = 1024;
  char* line = malloc(line_size);

  // Read the line
  if (fgets(line, line_size, fp) == NULL) {
    // Handle the error
    free(line);
    return NULL;
  }

  // Remove the newline character from the end of the line
  size_t len = strlen(line);
  if (len > 0 && line[len - 1] == '\n') {
    line[len - 1] = '\0';
  }

  return line;
}
