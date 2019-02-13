<?php
    class Node {
        public $left;
        public $right;
        public $data;

        public function __construct($data) {
            $this->data = $data;
            $this->left = null;
            $this->right = null;
        }

        public function insert($value) {
            if ($value <= $this->data) {
                if ($this->left == null) {
                    $this->left = new Node($value);
                } else {
                    $this->left->insert($value);
                }
            } else {
                if ($this->right == null) {
                    $this->right = new Node($value);
                } else {
                    $this->right->insert($value);
                }
            }
        }

        public function contains($value) {
            if ($value == $this->data) {
                return true;
            } else if ($value < $this->data) {
                if ($this->left == null) {
                    return false;
                } else {
                   $this->left->contains($value); 
                }
            } else {
                if ($this->right == null) {
                    return false;
                } else {
                    $this->right->contains($value);
                }
            }
        }
    }

    $teste = new Node(10);
    $teste->insert(15);
    var_dump($teste);
    var_dump($teste->contains(15));