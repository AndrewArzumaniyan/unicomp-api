import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gidSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  accomodation: {
    title: {
      type: String,
      required: true
    },
    common_info: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    uni_campus: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    campus: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    flat: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    end_common_info: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
  },
  food: {
    title: {
      type: String,
      required: true
    },
    uni_ashana: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    fastfood: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    streetfood: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    cafes: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    supermarkets: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
  },
  relax: {
    title: {
      type: String,
      required: true
    },
    parks: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    skiis_and_snowboarding: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    museums: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    shopping: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    }
  },
  application: {
    title: {
      type: String,
      required: true
    },
    twogis: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    glovo: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    indrive: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    krisha: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    }
  },
  application: {
    title: {
      type: String,
      required: true
    },
    municipal_transport: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    taxi: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    car_rent: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    },
    bikes: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    }
  },
  common_description: {
    title: {
      type: String,
      required: true
    },
    info: {
      type: String,
      required: true
    }
  }
});

const Gid = mongoose.model('Gid', gidSchema);

export { Gid } 