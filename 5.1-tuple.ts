/**
 * Created by moksha on 06/02/17.
 */
// Declare a tuple type

/**
 * Tuple types allow you to express an array where the type of a fixed number of elements is known,
 * but need not be the same
 */

let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK

// Initialize it incorrectly
//x = [10, "hello"]; // Error