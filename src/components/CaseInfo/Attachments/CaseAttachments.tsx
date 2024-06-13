import { cities } from "@/utilites/Cities";
import {
  Autocomplete,
  Box,
  FilledTextFieldProps,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextField,
  TextFieldVariants,
} from "@mui/material";
import CaseAttachmentsTable from "./CaseAttachmentsTable";
import { AttachmentType } from "@/utilites/AttachmentType";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CaseAttachmentPagination from "./CaseAttachmentPagination";
import { SortBy } from "@/utilites/SortBy";

const CaseAttachments = () => {
  return (
    <div className="border-t-2 w-full">
      <Box className="w-full p-[32px] border-b-2">
        <h1 className="flex">
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="40" height="40" rx="20" fill="#FEFCE8" />
            <path
              d="M18.3333 17.1666H23.3333C23.5543 17.1666 23.7663 17.0788 23.9226 16.9225C24.0789 16.7663 24.1667 16.5543 24.1667 16.3333C24.1667 16.1123 24.0789 15.9003 23.9226 15.744C23.7663 15.5878 23.5543 15.5 23.3333 15.5H18.3333C18.1123 15.5 17.9004 15.5878 17.7441 15.744C17.5878 15.9003 17.5 16.1123 17.5 16.3333C17.5 16.5543 17.5878 16.7663 17.7441 16.9225C17.9004 17.0788 18.1123 17.1666 18.3333 17.1666ZM16.6667 20.5H23.3333C23.5543 20.5 23.7663 20.4122 23.9226 20.2559C24.0789 20.0996 24.1667 19.8876 24.1667 19.6666C24.1667 19.4456 24.0789 19.2337 23.9226 19.0774C23.7663 18.9211 23.5543 18.8333 23.3333 18.8333H16.6667C16.4457 18.8333 16.2337 18.9211 16.0774 19.0774C15.9211 19.2337 15.8333 19.4456 15.8333 19.6666C15.8333 19.8876 15.9211 20.0996 16.0774 20.2559C16.2337 20.4122 16.4457 20.5 16.6667 20.5ZM16.6667 23.8333H23.3333C23.5543 23.8333 23.7663 23.7455 23.9226 23.5892C24.0789 23.4329 24.1667 23.221 24.1667 23C24.1667 22.7789 24.0789 22.567 23.9226 22.4107C23.7663 22.2544 23.5543 22.1666 23.3333 22.1666H16.6667C16.4457 22.1666 16.2337 22.2544 16.0774 22.4107C15.9211 22.567 15.8333 22.7789 15.8333 23C15.8333 23.221 15.9211 23.4329 16.0774 23.5892C16.2337 23.7455 16.4457 23.8333 16.6667 23.8333ZM26.6667 12.1666H13.3333C13.1123 12.1666 12.9004 12.2544 12.7441 12.4107C12.5878 12.567 12.5 12.7789 12.5 13V28C12.5 28.1547 12.5431 28.3064 12.6245 28.4381C12.7058 28.5697 12.8222 28.6761 12.9607 28.7453C13.0991 28.8145 13.254 28.8438 13.4082 28.8299C13.5623 28.816 13.7095 28.7595 13.8333 28.6666L15.5583 27.375L17.275 28.6666C17.4192 28.7748 17.5947 28.8333 17.775 28.8333C17.9553 28.8333 18.1308 28.7748 18.275 28.6666L20 27.375L21.725 28.6666C21.8692 28.7748 22.0447 28.8333 22.225 28.8333C22.4053 28.8333 22.5808 28.7748 22.725 28.6666L24.4417 27.375L26.1667 28.6666C26.2911 28.7593 26.4389 28.8155 26.5935 28.8287C26.7481 28.842 26.9033 28.8118 27.0417 28.7416C27.1791 28.6724 27.2947 28.5664 27.3756 28.4355C27.4565 28.3046 27.4995 28.1539 27.5 28V13C27.5 12.7789 27.4122 12.567 27.2559 12.4107C27.0996 12.2544 26.8877 12.1666 26.6667 12.1666ZM25.8333 26.3333L24.9417 25.6666C24.7974 25.5584 24.622 25.5 24.4417 25.5C24.2614 25.5 24.0859 25.5584 23.9417 25.6666L22.225 26.9583L20.5 25.6666C20.3558 25.5584 20.1803 25.5 20 25.5C19.8197 25.5 19.6442 25.5584 19.5 25.6666L17.775 26.9583L16.0583 25.6666C15.9141 25.5584 15.7386 25.5 15.5583 25.5C15.378 25.5 15.2026 25.5584 15.0583 25.6666L14.1667 26.3333V13.8333H25.8333V26.3333Z"
              fill="#CA8A04"
            />
          </svg>

          <span className="mt-2 ml-[16px] mr-[16px]">
            Total Quoted: $1500.37{" "}
          </span>
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="40" height="40" rx="20" fill="#F0FDF4" />
            <path
              d="M19.9998 12.1666C15.4165 12.1666 11.6665 15.9166 11.6665 20.5C11.6665 25.0833 15.4165 28.8333 19.9998 28.8333C24.5832 28.8333 28.3332 25.0833 28.3332 20.5C28.3332 15.9166 24.5832 12.1666 19.9998 12.1666ZM23.4998 19.0833L19.4998 23.0833C19.1665 23.4166 18.6665 23.4166 18.3332 23.0833L16.4998 21.25C16.1665 20.9166 16.1665 20.4166 16.4998 20.0833C16.8332 19.75 17.3332 19.75 17.6665 20.0833L18.9165 21.3333L22.3332 17.9166C22.6665 17.5833 23.1665 17.5833 23.4998 17.9166C23.8332 18.25 23.8332 18.75 23.4998 19.0833Z"
              fill="#16A34A"
            />
          </svg>
          <span className="ml-[16px] mt-2">Total Paid: $650.37</span>
        </h1>
      </Box>

      <Box className="w-full h-[120px] p-8 border-b">
        <Box className="h-14">
          <FormControl
            sx={{
              // width: "194px",
              height: "92px",
              marginBottom: "24px",
              marginRight: "16px",
            }}
            className="w-[25%]"
          >
            <Autocomplete
              className="w-full"
              id="file-type"
              sx={{ width: 300 }}
              options={AttachmentType}
              autoHighlight
              getOptionLabel={(option: any) => option.city}
              renderOption={(props: any, option: any) => (
                <Box component="li" {...props}>
                  {option.type}
                </Box>
              )}
              renderInput={(
                params: JSX.IntrinsicAttributes & {
                  variant?: TextFieldVariants | undefined;
                } & Omit<
                    | OutlinedTextFieldProps
                    | FilledTextFieldProps
                    | StandardTextFieldProps,
                    "variant"
                  >
              ) => (
                <TextField
                  {...params}
                  placeholder="File type"
                  inputProps={{
                    ...params.inputProps,
                  }}
                />
              )}
            />
          </FormControl>

          <FormControl
            sx={{
              // width: "194px",
              height: "92px",
              marginBottom: "24px",
              marginRight: "16px",
            }}
            className="w-[25%]"
          >
            <Autocomplete
              className="w-full"
              id="sort-by"
              sx={{ width: 300 }}
              options={SortBy}
              autoHighlight
              getOptionLabel={(option: any) => option.city}
              renderOption={(props: any, option: any) => (
                <Box component="li" {...props}>
                  {option.name}
                </Box>
              )}
              renderInput={(
                params: JSX.IntrinsicAttributes & {
                  variant?: TextFieldVariants | undefined;
                } & Omit<
                    | OutlinedTextFieldProps
                    | FilledTextFieldProps
                    | StandardTextFieldProps,
                    "variant"
                  >
              ) => (
                <TextField
                  {...params}
                  placeholder="Sort by"
                  inputProps={{
                    ...params.inputProps,
                  }}
                />
              )}
            />
          </FormControl>

          {/* <FormControl
            sx={{
              // width: "275px",
              height: "92px",
              marginBottom: "24px",
            }}
            className="w-[16rem]"
          >
            <Autocomplete
              className="w-full"
              id="city"
              sx={{ width: 300 }}
              options={cities}
              autoHighlight
              getOptionLabel={(option: any) => option.city}
              renderOption={(props: any, option: any) => (
                <Box component="li" {...props}>
                  {option.city}
                </Box>
              )}
              renderInput={(
                params: JSX.IntrinsicAttributes & {
                  variant?: TextFieldVariants | undefined;
                } & Omit<
                    | OutlinedTextFieldProps
                    | FilledTextFieldProps
                    | StandardTextFieldProps,
                    "variant"
                  >
              ) => (
                <TextField
                  {...params}
                  placeholder="Select town or city"
                  inputProps={{
                    ...params.inputProps,
                  }}
                />
              )}
            />
          </FormControl> */}

          <FormControl className="w-[40%]" variant="outlined">
            {/* <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel> */}
            <OutlinedInput
              id="outlined-adornment-password"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <SearchOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Search"
            />
          </FormControl>
        </Box>
      </Box>
      <Box className="w-full mb-5">
        <CaseAttachmentsTable />
      </Box>
      <Box className="w-full h-24 flex justify-center items-center">
        <CaseAttachmentPagination />
      </Box>
    </div>
  );
};
export default CaseAttachments;
