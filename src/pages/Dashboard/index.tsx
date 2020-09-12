import React, { useState, useCallback } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import { useSidebar } from "../../hooks/sidebar";

import { FaBars } from "react-icons/fa";

import Sidebar from "../../components/Sidebar";
import Fab from "@material-ui/core/Fab";

import { Container, Main, Grid, Card } from "./styles";

const Dashboard: React.FC = () => {
  const { handleToggleSidebar } = useSidebar();

  return (
    <Container>
      <Sidebar />
      <Main>
        <div className="btn-hidden" onClick={() => handleToggleSidebar(true)}>
          <Fab
            size="small"
            color="inherit"
            className="btn-color-primary"
            aria-label="Menu"
          >
            <FaBars />
          </Fab>
        </div>
        <Scrollbars>
          <Grid>
            <Card>1</Card>
            <Card>2</Card>
            <Card>3</Card>
            <Card>4</Card>
            <Card>5</Card>
            <Card>6</Card>
            <Card>7</Card>
            <Card>8</Card>
            <Card>9</Card>
            <Card>10</Card>
            <Card>11</Card>
            <Card>12</Card>
            <Card>13</Card>
            <Card>14</Card>
            <Card>15</Card>
            <Card>16</Card>
            <Card>17</Card>
            <Card>18</Card>
            <Card>19</Card>
            <Card>20</Card>
            <Card>21</Card>
            <Card>22</Card>
          </Grid>
        </Scrollbars>
      </Main>
    </Container>
  );
};

export default Dashboard;
