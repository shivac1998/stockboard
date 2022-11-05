# Stockboard

## 1. Requirements Documentation

### This repository will contain the source code for a dashboard application displaying stock prices with real-time market data.

### This application will be created using React.js. Axios will be used to perform the GET request from the Alpha Vantage Stock API located here: https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=xxx

### Since this project has been created with no outside collaboration, the only collaborative resource that will be used in the creation of this project will be GitHub and Git for version control and management.

## 2. Architecture/Design Docs

### The goal of this application is to display real-time market data of a variety of different stocks. The end-user should be able to type the stock ticker into a search bar to find and display a specific stock price. The arguments needed to use the API are displayed on the Finnhub website and are as follows-

### Arguments:

#### symbol (REQUIRED)

Symbol.

#### resolution (REQUIRED)

Supported resolution includes 1, 5, 15, 30, 60, D, W, M .Some timeframes might not be available depending on the exchange.

#### from (REQUIRED)

UNIX timestamp. Interval initial value.

#### to (REQUIRED)

UNIX timestamp. Interval end value.

## 3. End-User Docs

### Response Attributes:

c
List of close prices for returned candles.

h
List of high prices for returned candles.

l
List of low prices for returned candles.

o
List of open prices for returned candles.

s
Status of the response. This field can either be ok or no_data.

t
List of timestamp for returned candles.

v
List of volume data for returned candles.
